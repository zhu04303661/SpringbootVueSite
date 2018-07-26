package cn.site.service.questions.impl;

import cn.site.constant.ErrorConstant;
import cn.site.dao.QuestionsDao;
import cn.site.exception.BusinessException;
import cn.site.model.QuestionsDomain;
import cn.site.service.questions.QuestionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@Service
public class QuestionServiceImpl implements QuestionService {


    @Autowired
    private QuestionsDao questionsDao;

    @Override
    public void deleteQuestions(int id) {
        if(id > 0)
            throw BusinessException.withErrorCode(ErrorConstant.Common.PARAM_IS_EMPTY);
        questionsDao.deleteQuestions(id);

    }



    @Override
    public QuestionsDomain getQuestionsById(Integer id) {
        return null;
    }



    @Override
    @Transactional
    public void updateQuestionsById(int id, String qustion, String options) {
        if(StringUtils.isBlank(qustion))
            throw BusinessException.withErrorCode(ErrorConstant.Common.PARAM_IS_EMPTY);
        QuestionsDomain option = new QuestionsDomain();
        option.setId(id);
        option.setOptions(options);
        option.setQuestion(qustion);
        questionsDao.updateQuestions(option);

    }

    @Override
    @Transactional
    public void saveQuestions(Map<String, String> options) {
//        if (null != options && !options.isEmpty()) {
//            options.forEach(this::updateOptionByName);
//        }
    }

//    @Override
//    @Cacheable(value = "optionCache", key = "'optionByName_' + #p0")
//    public OptionsDomain getOptionByName(String name) {
//        if(StringUtils.isBlank(name))
//            throw BusinessException.withErrorCode(ErrorConstant.Common.PARAM_IS_EMPTY);
//        return questionsDao.getOption(name);
//    }

    @Override
//    @Cacheable(value = "questionsCache", key = "'questions_'")
    public List<QuestionsDomain> getQuestions() {
        List<QuestionsDomain> re = questionsDao.getQuestions();
        for(QuestionsDomain questionsDomain: re){
            String content = questionsDomain.getOptions();
            if(content.indexOf(",") > -1){
                String[] qlist = content.split(",");
                List<String> optionList =  new ArrayList<>();
                for(int i=0; i<qlist.length; i++){
                    optionList.add(qlist[i]);
                }
                questionsDomain.setOptionList(optionList);
            }
        }
        return re;
    }
}
