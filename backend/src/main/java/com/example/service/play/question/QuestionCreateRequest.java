package com.example.service.play.question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 문제 생성 요청 DTO (협업 DB 스키마 기준)
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionCreateRequest {

    // FK: games.id (없으면 null 가능)
    private Long gameId;

    // NOT NULL
    private String content;

    // nullable
    private String answer;

    // nullable
    private String difficulty;
}
