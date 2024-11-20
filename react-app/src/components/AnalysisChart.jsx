import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router 사용
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { date: '10/9', value: 50 },
  { date: '10/10', value: 70 },
  { date: '10/11', value: 65 },
  { date: '10/12', value: 85 },
  { date: '10/13', value: 100 },
];

export default function AnalysisChart() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* 제목 섹션 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-60px',
          marginBottom: '30px', // 제목과 아래 내용 사이 여백 추가
        }}
      >
        <hr
          style={{
            width: '100%',
            border: 'none',
            borderTop: '4px solid #4B5563',
            marginRight: '50px',
          }}
        />
        <h2
          style={{
            fontFamily: 'Amethysta, serif',
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#111827',
          }}
        >
          2024.10
        </h2>
        <hr
          style={{
            width: '100%',
            border: 'none',
            borderTop: '4px solid #4B5563',
            marginLeft: '50px',
          }}
        />
      </div>

      {/* 버튼 */}
      <div
        style={{
          marginBottom: '20px', // 버튼과 차트 사이 여백 추가
          textAlign: 'right',
          marginRight: '100px',
        }}
      >
        <button
          onClick={() => navigate('/articles')} // 페이지 이동 이벤트
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#000000',
            cursor: 'pointer',
            //fontFamily: "arial",
            fontSize: '16px',
            fontWeight:'bold',
            padding: 0, // 여백 제거
          }}
        >
          신뢰도 높은 기사 보러가기 →
        </button>
      </div>

      {/* 차트 섹션 */}
      <div>
        <LineChart
          width={1100}
          height={300}
          data={data}
          style={{ margin: '20px auto' }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" />
          <XAxis dataKey="date" stroke="#4B5563" />
          <YAxis stroke="#4B5563" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4B5563" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
}
