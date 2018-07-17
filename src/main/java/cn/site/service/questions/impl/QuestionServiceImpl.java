package cn.site.service.questions.impl;

import cn.site.constant.ErrorConstant;
import cn.site.dao.OptionDao;
import cn.site.dao.QuestionsDao;
import cn.site.exception.BusinessException;
import cn.site.model.OptionsDomain;
import cn.site.service.option.OptionService;
import cn.site.service.questions.QuestionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public class QuestionServiceImpl implements QuestionService {


    @Autowired
    private QuestionsDao questionsDao;

    @Override
    public void deleteOptionByName(String name) {
        if(StringUtils.isBlank(name))
            throw BusinessException.withErrorCode(ErrorConstant.Common.PARAM_IS_EMPTY);
        questionsDao.deleteOptionByName(name);

    }

    @Override
    @Transactional
    public void updateOptionByName(String name, String value) {
        if(StringUtils.isBlank(name))
            throw BusinessException.withErrorCode(ErrorConstant.Common.PARAM_IS_EMPTY);
        OptionsDomain option = new OptionsDomain();
        option.setName(name);
        option.setValue(value);
        questionsDao.updateOptionByName(option);

    }

    @Override
    @Transactional
    public void saveOptions(Map<String, String> options) {
        if (null != options && !options.isEmpty()) {
            options.forEach(this::updateOptionByName);
        }
    }

    @Override
    @Cacheable(value = "optionCache", key = "'optionByName_' + #p0")
    public OptionsDomain getOptionByName(String name) {
        if(StringUtils.isBlank(name))
            throw BusinessException.withErrorCode(ErrorConstant.Common.PARAM_IS_EMPTY);
        return questionsDao.getOptionByName(name);
    }

    @Override
    @Cacheable(value = "optionsCache", key = "'options_'")
    public List<OptionsDomain> getOptions() {
        return questionsDao.getOptions();
    }
}
