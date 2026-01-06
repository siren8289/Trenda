package com.example.service.play.question;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    // 협업 스키마 기준 중복 체크(선택)
    boolean existsByGameIdAndContent(Long gameId, String content);
}
