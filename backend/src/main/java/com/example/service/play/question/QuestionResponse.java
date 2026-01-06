package com.example.service.play.question;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 문제 응답 DTO (협업 DB 스키마 기준)
 */
@Getter
@AllArgsConstructor
public class QuestionResponse {

    private Long id;
    private Long gameId;
    private String content;
    private String answer;
    private String difficulty;

    public static QuestionResponse from(Question question) {
        return new QuestionResponse(
                question.getId(),
                question.getGameId(),
                question.getContent(),
                question.getAnswer(),
                question.getDifficulty()
        );
    }
}
