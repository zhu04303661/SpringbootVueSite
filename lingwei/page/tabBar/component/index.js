const AV = require('../../../libs/av-live-query-weapp-min');
const Todo = require('../../../model/todo');
const bind = require('../../../libs/live-query-binding');

Page({
  data: {
    todos: [],
    editedTodo: {},
    draft: '',
    editDraft: null,
    list: [
      {
        id: 'view',
        name: '1.您想要去的国家或地区？（可多选）',
        open: true,
        pages: ['view', 'scroll-view', 'swiper'],
        options: ['美国', '英国', '加拿大', '澳大利亚', '日本', '香港地区', '新加坡', '马来西亚', '希腊', '葡萄牙']
      }, {
        id: 'content',
        name: '2.您为什么想移民？（可多选）',
        open: true,
        pages: ['text', 'icon', 'progress'],
        options: ['子女教育', '海外身份', '海外职业', '养老储备', '税务筹划', '旅游度假']
      }, {
        id: 'form',
        name: '3.您的家庭资产？（人民币）',
        open: true,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea'],
        options: ['100万以内', '100～300万', '300～500万', '500～1000万', '1000～3000万', '3000万以上']

      }, {
        id: 'nav',
        name: '4.您可接受的海外居住时间？（部分移民项目在当地有一定的居住时间要求）',
        open: true,
        pages: ['navigator'],
        options: ['每年入境一次', '每年住7天', '每年住30天', '每年住6个月', '住满2年', '不方便前往']

      }, {
        id: 'media',
        name: '5.您的最高学历？',
        open: true,
        pages: ['image', 'audio', 'video'],
        options: ['高中以下', '高中或者中专', '大专', '本科', '硕士', '博士']

      }, {
        id: 'map',
        name: '6.您的英语水平？',
        open: true,
        pages: ['map'],
        options: ['完全不会', '专业8级','雅思7分及以上','雅思6分','雅思4分','雅思3分', '大学英语6级', '大学英语4级', '中学英语水平']
      }, {
        id: 'canvas',
        name: '7.您的工作年限？',
        open: true,
        pages: ['canvas'],
        options: ['1年以内', '1～3年', '3～5年', '5～8年', '8年以上', '在校学生']
      }, {
        id: 'nav',
        name: '8.您想多久拿到身份？',
        open: true,
        pages: ['navigator'],
        options: ['3个月', '6个月', '1年', '3～5年', '10年', '不在意']

      }, {
          id: 'search',
          name: '9.您的手机号码？',
          open: true,
          pages: ['canvas']
      }
    ]
  },
  login: function() {
    return AV.Promise.resolve(AV.User.current()).then(user =>
      user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null
    ).then(user => user ? user : AV.User.loginWithWeapp()).catch(error => console.error(error.message));
  },
  fetchTodos: function (user) {
    console.log('uid', user.id);
    const query = new AV.Query(Todo)
      .equalTo('user', AV.Object.createWithoutData('User', user.id))
      .descending('createdAt');
    const setTodos = this.setTodos.bind(this);
    return AV.Promise.all([query.find().then(setTodos), query.subscribe()]).then(([todos, subscription]) => {
      this.subscription = subscription;
      if (this.unbind) this.unbind();
      this.unbind = bind(subscription, todos, setTodos);
    }).catch(error => console.error(error.message));
  },
  onReady: function () {
    this.login().then(this.fetchTodos.bind(this)).catch(error => console.error(error.message));

      // new AV.Query('YiminQuestions')
      //   .descending('createdAt')
      //   .find()
      //   .then(list =>  function(list) {
      //     console.log(list)
      //     this.setData({ list })
      //   })
      //   .catch(console.error);
  },
  onUnload: function() {
    this.subscription.unsubscribe();
    this.unbind();
  },
  onPullDownRefresh: function () {
    const user = AV.User.current();
    if (!user) return wx.stopPullDownRefresh();
    this.fetchTodos(user).catch(error => console.error(error.message)).then(wx.stopPullDownRefresh);
  },
  setTodos: function (todos) {
    const activeTodos = todos.filter(todo => !todo.done);
    this.setData({
      todos,
      activeTodos,
    });
    return todos;
  },
  updateDraft: function ({
    detail: {
      value
    }
  }) {
    // Android 真机上会诡异地触发多次时 value 为空的事件
    if (!value) return;
    this.setData({
      draft: value
    });
  },
  addTodo: function () {
    var value = this.data.draft && this.data.draft.trim()
    if (!value) {
      return;
    }
    var acl = new AV.ACL();
    acl.setPublicReadAccess(false);
    acl.setPublicWriteAccess(false);
    acl.setReadAccess(AV.User.current(), true);
    acl.setWriteAccess(AV.User.current(), true);
    new Todo({
      content: value,
      done: false,
      user: AV.User.current()
    }).setACL(acl).save().then((todo) => {
      this.setTodos([todo, ...this.data.todos]);
    }).catch(error => console.error(error.message));
    this.setData({
      draft: ''
    });
  },
  toggleDone: function ({
    target: {
      dataset: {
        id
      }
    }
  }) {
    const { todos } = this.data;
    const currentTodo = todos.filter(todo => todo.id === id)[0];
    currentTodo.done = !currentTodo.done;
    currentTodo.save()
      .then(() => this.setTodos(todos))
      .catch(error => console.error(error.message));
  },
  editTodo: function ({
    target: {
      dataset: {
        id
      }
    }
  }) {
    this.setData({
      editDraft: null,
      editedTodo: this.data.todos.filter(todo => todo.id === id)[0] || {}
    });
  },
  updateEditedContent: function ({
    detail: {
      value
    }
  }) {
    this.setData({
      editDraft: value
    });
  },
  doneEdit: function ({
    target: {
      dataset: {
        id
      }
    }
  }) {
    const { todos, editDraft } = this.data;
    this.setData({
      editedTodo: {},
    });
    if (editDraft === null) return;
    const currentTodo = todos.filter(todo => todo.id === id)[0];
    if (editDraft === currentTodo.content) return;
    currentTodo.content = editDraft;
    currentTodo.save().then(() => {
      this.setTodos(todos);
    }).catch(error => console.error(error.message));
  },
  removeDone: function () {
    AV.Object.destroyAll(this.data.todos.filter(todo => todo.done)).then(() => {
      this.setTodos(this.data.activeTodos);
    }).catch(error => console.error(error.message));
  },
  // kindToggle: function (e) {
  //   var id = e.currentTarget.id, list = this.data.list;
  //   for (var i = 0, len = list.length; i < len; ++i) {
  //     if (list[i].id == id) {
  //       list[i].open = !list[i].open
  //     } else {
  //       list[i].open = false
  //     }
  //   }
  //   this.setData({
  //     list: list
  //   });
  // }
})

