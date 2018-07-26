package cn.site.controller;

import cn.site.model.OptionsDomain;
import cn.site.model.QuestionsDomain;
import cn.site.service.option.OptionService;
import cn.site.service.questions.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/json/", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class RestApiController {
    @Autowired
    private OptionService optionService;

    @Autowired
    private QuestionService questionService;

    @RequestMapping(path = "/getQuestions", produces = MediaType.APPLICATION_JSON_VALUE, method = {RequestMethod.GET, RequestMethod.POST})
    private List<QuestionsDomain> getQuestions(@RequestBody String body) {
        List<OptionsDomain> tmp = optionService.getOptions();

        return questionService.getQuestions();
//        return webService.removeproducttemplate(body);
    }
}
