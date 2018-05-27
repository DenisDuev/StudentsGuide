package com.ux.student.guide.main;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class UserController {

    private final AtomicLong counter = new AtomicLong();

//    @RequestMapping(method = GET, value = "/userman")
//    public User createUser(@RequestParam(value = "id") long id){
//        return new User(counter.incrementAndGet(), "test", "testpass");
//    }
}
