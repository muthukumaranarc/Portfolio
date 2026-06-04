package com.muthu.sendMail.Services;

import com.muthu.sendMail.Data.UserInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;
import org.springframework.web.client.RestTemplate;

@Service
public class MainService {

    @Autowired
    private JavaMailSender mailSender;

    private String myMail = "muthukumaranarc00@gmail.com";

    public boolean sendMailToMe(UserInput data) {
        String subject = "🚀 New Portfolio Visitor Alert!";
        String body = "<html>" +
                "<body style='font-family: Arial, sans-serif; background-color:#f4f6f9; padding:20px;'>" +
                "<div style='max-width:600px; margin:auto; background:#fff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); padding:20px;'>" +
                "<h2 style='color:#6C63FF;'>👋 Hey Muthukumaran,</h2>" +
                "<p>A new visitor has explored your portfolio and left some details:</p>" +
                "<ul style='line-height:1.8;'>" +
                "<li><b>Name:</b> " + data.getName() + "</li>" +
                "<li><b>Experience:</b> " + data.getExperience() + "</li>" +
                "<li><b>Role in IT:</b> " + data.getRoleInIT() + "</li>" +
                "<li><b>Email:</b> " + data.getEmail() + "</li>" +
                "<li><b>Feedback:</b> " + data.getFeedback() + "</li>" +
                "<li><b>Portfolio:</b> <a href='" + data.getLink() + "'>" + data.getLink() + "</a></li>" +
                "<li><b>Rating:</b> ⭐ " + data.getRating() + "/5</li>" +
                "</ul>" +
                "<p style='color:#333;'>Make sure to check out their profile and maybe connect! 🚀</p>" +
                "<p style='margin-top:20px; font-size:13px; color:gray;'>Sent automatically by <b>Your Portfolio Bot</b></p>" +
                "</div></body></html>";

        return sendHtmlMail(body, myMail, subject);
    }

    public boolean sendMailToVisitor(UserInput data) {
        String subject = "🌟 Thank You for Visiting My Portfolio!";
        String body = "<html>" +
                "<body style='font-family: Arial, sans-serif; background-color:#f4f6f9; padding:20px;'>" +
                "<div style='max-width:600px; margin:auto; background:#fff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); padding:20px;'>" +
                "<h2 style='color:#6C63FF;'>Hi " + data.getName() + ", 👋</h2>" +
                "<p>Thank you for exploring my portfolio! I truly appreciate your interest.</p>" +
                "<blockquote style='border-left:4px solid #6C63FF; padding-left:10px; margin:15px 0; color:#555;'>" +
                "Your feedback: <i>\"" + data.getFeedback() + "\"</i>" +
                "</blockquote>" +
                "<p>It’s amazing to hear thoughts from professionals in <b>" + data.getRoleInIT() + "</b> with <b>" + data.getExperience() + " years</b> of experience.</p>" +
                "<p>If you'd like to connect or collaborate in the future, feel free to reach out anytime! 🚀</p>" +
                "<p style='margin-top:20px;'>Wishing you success in your journey! 🌟</p>" +
                "<hr>" +
                "<p style='font-size:14px; color:#666;'>Best regards,<br><b>Muthukumaran</b><br>" +
                "📧 <a href='mailto:muthukumaranarc00@gmail.com'>muthukumaranarc00@gmail.com</a><br>" +
                "🌐 <a href='https://muthukumaran-portfolio.web.app'>Visit My Portfolio</a></p>" +
                "</div></body></html>";

        return sendHtmlMail(body, data.getEmail(), subject);
    }

    private boolean sendHtmlMail(String body, String to, String subject) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(myMail);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(body, true); // true = send HTML

            mailSender.send(message);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ResponseEntity<String> getStats() {
        try {
            String username = "Jq4H1BglTL";
            String graphQLQuery = "{\"query\":\"query getUserProfile($username: String!) { matchedUser(username: $username) { profile { realName reputation } submitStats: submitStatsGlobal { acSubmissionNum { difficulty count submissions } } } }\",\"variables\":{\"username\":\"" + username + "\"}}";
            
            RestTemplate restTemplate = new RestTemplate();
            org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
            headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
            
            org.springframework.http.HttpEntity<String> entity = new org.springframework.http.HttpEntity<>(graphQLQuery, headers);
            String response = restTemplate.postForObject("https://leetcode.com/graphql", entity, String.class);
            
            // Parse the response to extract the stats
            String processedResponse = processLeetCodeResponse(response);
            return ResponseEntity.ok(processedResponse);
        } catch (Exception e) {
            // Fallback response if the API fails
            String fallback = "{\"totalSolved\":0,\"totalQuestions\":0,\"easySolved\":0,\"mediumSolved\":0,\"hardSolved\":0,\"totalEasy\":0,\"totalMedium\":0,\"totalHard\":0}";
            return ResponseEntity.ok(fallback);
        }
    }
    
    private String processLeetCodeResponse(String response) {
        try {
            // Parse JSON response from LeetCode GraphQL
            com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
            com.fasterxml.jackson.databind.JsonNode root = mapper.readTree(response);
            
            com.fasterxml.jackson.databind.JsonNode submitStats = root.path("data").path("matchedUser").path("submitStats").path("acSubmissionNum");
            
            int totalSolved = 0;
            int totalQuestions = 0;
            int easySolved = 0, mediumSolved = 0, hardSolved = 0;
            int totalEasy = 0, totalMedium = 0, totalHard = 0;
            
            for (com.fasterxml.jackson.databind.JsonNode item : submitStats) {
                String difficulty = item.path("difficulty").asText();
                int count = item.path("count").asInt();
                int submissions = item.path("submissions").asInt();
                
                totalQuestions += submissions;
                totalSolved += count;
                
                if ("Easy".equals(difficulty)) {
                    easySolved = count;
                    totalEasy = submissions;
                } else if ("Medium".equals(difficulty)) {
                    mediumSolved = count;
                    totalMedium = submissions;
                } else if ("Hard".equals(difficulty)) {
                    hardSolved = count;
                    totalHard = submissions;
                }
            }
            
            String result = String.format("{\"totalSolved\":%d,\"totalQuestions\":%d,\"easySolved\":%d,\"mediumSolved\":%d,\"hardSolved\":%d,\"totalEasy\":%d,\"totalMedium\":%d,\"totalHard\":%d}",
                totalSolved, totalQuestions, easySolved, mediumSolved, hardSolved, totalEasy, totalMedium, totalHard);
            
            return result;
        } catch (Exception e) {
            String fallback = "{\"totalSolved\":0,\"totalQuestions\":0,\"easySolved\":0,\"mediumSolved\":0,\"hardSolved\":0,\"totalEasy\":0,\"totalMedium\":0,\"totalHard\":0}";
            return fallback;
        }
    }
}
