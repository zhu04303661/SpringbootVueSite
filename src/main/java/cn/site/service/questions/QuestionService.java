package cn.site.service.questions;

import cn.site.model.QuestionsDomain;

import java.util.List;
import java.util.Map;

/**
 * Created by Donghua.Chen on 2018/4/28.
 */
public interface QuestionService {

    /**
     * 删除配置
     * @param id
     * @return
     */
    void deleteQuestions(int id);

    /**
     * @return
     */
    void updateQuestionsById(int id, String qustion, String options);

    /**
     * 保存网站配置
     * @param options
     */
    void saveQuestions(Map<String, String> options);
    /***
     * 根据名称获取网站配置
     * @param id
     * @return
     */
    QuestionsDomain getQuestionsById(Integer id);

    /**
     * 获取全部网站配置
     * @return
     */
    List<QuestionsDomain> getQuestions();
}
