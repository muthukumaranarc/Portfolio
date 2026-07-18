package com.muthu.Portfolio.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResumeDriveLinkController {

    private final ResumeDriveLinkRepository repository;

    public ResumeDriveLinkController(ResumeDriveLinkRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/resume")
    public ResponseEntity<ResumeDriveLink> createResumeDriveLink(@RequestBody ResumeDriveLink request) {
        ResumeDriveLink saved = repository.save(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
