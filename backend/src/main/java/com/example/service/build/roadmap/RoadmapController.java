package com.example.service.build.roadmap;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/roadmap")
@RequiredArgsConstructor
public class RoadmapController {
    private final RoadmapService roadmapService;

    // 특정 유저의 로드맵 보기: GET http://localhost:8080/api/roadmap/1
    @GetMapping("/{userId}")
    public List<Roadmap> getMyRoadmap(@PathVariable Long userId) {
        return roadmapService.getUserRoadmaps(userId);
    }

    // 로드맵 하나 생성하기: POST http://localhost:8080/api/roadmap
    @PostMapping
    public Roadmap addRoadmap(@RequestParam Long userId, 
                              @RequestParam String title, 
                              @RequestParam String content) {
        return roadmapService.createRoadmap(userId, title, content);
    }
}