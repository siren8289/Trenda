package com.example.service.play.question;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    // 👇 반환 타입만 DTO로 변경
    @GetMapping
    public ResponseEntity<List<QuestionResponse>> list() {
        List<QuestionResponse> questions = questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    // 👇 @RequestBody로 변경 (JSON으로 받기)
    @PostMapping
    public ResponseEntity<QuestionResponse> add(
            @RequestBody QuestionCreateRequest request) {

        QuestionResponse created = questionService.createQuestion(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(created);
    }

    // 👇 예외 처리 추가
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ex.getMessage());
    }
}
