import React from 'react';
import Header from '../components/Header';
import AnalysisChart from '../components/AnalysisChart';
import styles from './OnBoardingPage.module.css';
import OnBoardingObject from '../assets/images/OnBoardingObject.png';

export default function OnBoardingPage() {
  return (
    <div>
      {/* 헤더 */}
      <Header />

      {/* 차트 섹션 */}
      <section className={styles['chart-section']}>
        {/* 흰색 배경 */}
        <div className={styles['chart-background']} />
        {/* 차트 */}
        <div className={styles['chart-container']}>
          <AnalysisChart />
        </div>
      </section>

      {/* 뉴스 섹션 */}
      <section className={styles['second-section']}>
        <div className={styles['stats-container']}>
          <div className={styles['stat-item']}>
            <h2 className="text-3xl font-bold">127</h2>
            <p className="text-base">일주일 간 분석한 뉴스 기사 수</p>
          </div>
          <div className={styles['stat-item']}>
            <h2 className="text-3xl font-bold">67%</h2>
            <p className="text-base">평균 신뢰도</p>
          </div>
          <div className={styles['stat-item']}>
            <h2 className="text-3xl font-bold">86</h2>
            <p className="text-base">신뢰도 80% 이상 기사</p>
          </div>
        </div>
        <div className="text-center mt-12 mb-12">
          <h2 className="font-amethysta text-4xl font-bold mb-4">Check Today News</h2>
          <p className="text-sm text-gray-700">매일매일 판별 되는 뉴스 기사</p>
          <button className={styles['news-button']}>보러가기</button>
          {/* 이미지 추가 */}
          <div className="mt-8">
            <img
              src={OnBoardingObject}
              alt="Onboarding Graphic"
              className="mx-auto"
              style={{ width: '150px', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
