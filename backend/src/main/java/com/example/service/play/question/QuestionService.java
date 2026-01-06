package com.example.service.play.question;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    // 전체 조회 (DTO 반환)
    public List<QuestionResponse> getAllQuestions() {
        return questionRepository.findAll().stream()
                .map(QuestionResponse::from)
                .collect(Collectors.toList());
    }

    // 생성 (협업 스키마 기준)
    public QuestionResponse createQuestion(QuestionCreateRequest request) {

        // ✅ 필수값 검증: content는 DB에서 NOT NULL
        if (request.getContent() == null || request.getContent().trim().isEmpty()) {
            throw new IllegalArgumentException("content는 필수입니다.");
        }

        // ✅ (선택) 협업 기준이 "같은 gameId + content 중복 금지"라면 이렇게
        // gameId가 null일 수도 있으니 분기 처리
        if (request.getGameId() != null &&
                questionRepository.existsByGameIdAndContent(
                        request.getGameId(),
                        request.getContent().trim()
                )) {
            throw new IllegalArgumentException("이미 동일한 문제(content)가 존재합니다.");
        }

        Question question = new Question(
                request.getGameId(),
                request.getContent().trim(),
                request.getAnswer(),      // nullable 가능
                request.getDifficulty()   // nullable 가능
        );

        Question saved = questionRepository.save(question);
        return QuestionResponse.from(saved);
    }
}
