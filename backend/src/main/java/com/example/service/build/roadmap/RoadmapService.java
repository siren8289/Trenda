package com.example.service.build.roadmap;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoadmapService {

    private final RoadmapRepository roadmapRepository;

    // 유저 로드맵 조회
    public List<Roadmap> getUserRoadmaps(Long userId) {
        return roadmapRepository.findByUserId(userId);
    }

    // 로드맵 생성
    public Roadmap createRoadmap(Long userId, String title, String content) {
        Roadmap roadmap = new Roadmap(userId, title, content);
        return roadmapRepository.save(roadmap);
    }
}
