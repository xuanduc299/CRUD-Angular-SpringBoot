package com.nxd.CRUDSpringBoot.CRUDSpringBoot.controller;

import com.nxd.CRUDSpringBoot.CRUDSpringBoot.entity.Personal;
import com.nxd.CRUDSpringBoot.CRUDSpringBoot.entity.Tutorial;
import com.nxd.CRUDSpringBoot.CRUDSpringBoot.repository.PersonalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PersonalController {
    @Autowired
    private PersonalRepository personalRepository;

    @GetMapping("/personal")
    public List<Personal> GetPersonal() {
        return personalRepository.findAll();
    }
    @GetMapping("/personal/{id}")
    public Personal GetUser(@PathVariable Integer id) {
        return personalRepository.findById(id).orElse(null);
    }
    @PostMapping("/personal")
    public Personal PostUser(@RequestBody Personal personal) {
        return personalRepository.save(personal);
    }
    @PutMapping("/personal/{id}")
    public Personal PutUser(@RequestBody Personal tutorial) {
        Personal oldPersonal = personalRepository.findById(tutorial.getId()).orElse(null);
        oldPersonal.setName(tutorial.getName());
        oldPersonal.setLast(tutorial.getLast());
        return personalRepository.save(oldPersonal);
    }
    @DeleteMapping("/personal/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        personalRepository.deleteById(id);
        return id;
    }
}
