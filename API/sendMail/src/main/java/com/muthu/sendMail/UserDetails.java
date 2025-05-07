package com.muthu.sendMail;

public class UserDetails {
    String name;
    String experience;
    String roleInIT;
    String email;
    String feedback;
    String link;
    String rating;

    public UserDetails(){}
    public UserDetails(String name, String experience, String roleInIT, String email, String feedback, String link, String rating){
        this.name = name;
        this.experience = experience;
        this.roleInIT = roleInIT;
        this.email = email;
        this.feedback = feedback;
        this.link = link;
        this.rating = rating;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    public String getRoleInIT() {
        return roleInIT;
    }
    public void setRoleInIT(String roleInIT) {
        this.roleInIT = roleInIT;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFeedback() {
        return feedback;
    }
    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }
    public String getRating() {
        return rating;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }
}
