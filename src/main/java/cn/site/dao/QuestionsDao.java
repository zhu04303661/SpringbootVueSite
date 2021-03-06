package cn.site.dao;

import cn.site.model.QuestionsDomain;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface QuestionsDao {
    /**
     * 删除配置
     * @param id
     * @return
     */
    int deleteQuestions(@Param("id") Integer id);

    /**
     * 更新配置
     * @param questions
     * @return
     */
    int updateQuestions(QuestionsDomain questions);

    /***
     * 根据名称获取配置
     * @param id
     * @return
     */
    QuestionsDomain getQuestionsById(@Param("id") Integer id);

    /**
     * 获取全部配置
     * @return
     */
    List<QuestionsDomain> getQuestions();
}
