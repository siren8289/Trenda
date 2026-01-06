package com.example.service.play.question;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "questions")
@Getter
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // FK: games.id (nullable)
    @Column(name = "game_id")
    private Long gameId;

    // NOT NULL 컬럼
    @Column(nullable = false)
    private String content;

    // nullable
    private String answer;

    // nullable
    private String difficulty;

    // 생성자 (DB 스키마에 맞게 수정)
    public Question(Long gameId, String content, String answer, String difficulty) {
        this.gameId = gameId;
        this.content = content;
        this.answer = answer;
        this.difficulty = difficulty;
    }
}
