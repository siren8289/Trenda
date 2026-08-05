package com.example.service.game.repository;

import com.example.service.game.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

// 별도의 코드 작성 없이 이대로 두면 저장/조회 기능이 자동으로 생겨요!
public interface GameRepository extends JpaRepository<Game, Long> {
}