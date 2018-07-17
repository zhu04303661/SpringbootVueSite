package cn.site.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "api/json/", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class RestApiController {

//    @RequestMapping(path = "/getOprions", produces = MediaType.APPLICATION_JSON_VALUE, method = {RequestMethod.GET, RequestMethod.POST})
//    private ResponseEntity removeproducttemplate(@RequestBody String body) {
////        return webService.removeproducttemplate(body);
//    }
}
