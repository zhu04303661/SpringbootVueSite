package cn.site.model;

public class QuestionsDomain {
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options;
    }

    /** id */
    private Integer id;

    /** 问题 */
    private String question;
    /** 答案 */
    private String options;

}
