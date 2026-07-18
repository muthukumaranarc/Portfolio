package com.muthu.Portfolio.backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "resume_drive_links")
public class ResumeDriveLink {

    @Id
    private String id;
    private String resumeDriveLink;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getResumeDriveLink() {
        return resumeDriveLink;
    }

    public void setResumeDriveLink(String resumeDriveLink) {
        this.resumeDriveLink = resumeDriveLink;
    }
}
