package com.example.service.build.roadmap;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RoadmapRepository extends JpaRepository<Roadmap, Long> {
    // 유저 한 명에게 여러 단계의 로드맵이 있을 수 있으므로 리스트로 찾습니다.
    List<Roadmap> findByUserId(Long userId);
}