// 뉴스 분석 페이지 구성
import { useParams } from 'react-router-dom'; // useParams 가져오기
import { mockAnalysisDataList } from '../data/mockData'; // Mock 데이터 가져오기
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import '../components/layout/AnalysisPage.module.css';
import Navbar from '../components/layout/Navbar.jsx';

const AnalysisPage = () => {
  const { id } = useParams(); // URL에서 id 파라미터 가져오기
  const data = mockAnalysisDataList.find((item, index) => index + 1 === parseInt(id, 10)); // ID로 데이터 선택

  if (!data) {
    return <div>데이터를 찾을 수 없습니다.</div>; // ID가 유효하지 않을 때 처리
  }

  const { summary, accuracy, originalArticle } = data;

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar 사용 */}
      <Navbar />

      {/* 메인 콘텐츠 영역 */}
      <main className="container mx-auto p-4">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 요약 및 분석 섹션 */}
          <AnalysisSummary summary={summary} />
          <AnalysisResult accuracy={accuracy} />

          {/* 원본 기사 섹션 */}
          <OriginalArticle article={originalArticle} />
        </div>
      </main>
    </div>
  );
};

export default AnalysisPage;

// 요약 섹션 컴포넌트
const AnalysisSummary = ({ summary }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>뉴스 요약</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted p-4 mb-4">
            <h3 className="text-lg font-medium mb-4">{summary}</h3>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">
                번역하기
              </Button>
              <Button size="sm" variant="secondary">
                뉴스 요약
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// 분석 결과 섹션 컴포넌트
const AnalysisResult = ({ accuracy }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis Result</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <div className="relative h-48 w-48">
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-8 border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold">{accuracy}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <AccuracyLegend />
        </div>
      </CardContent>
    </Card>
  );
};

// 정확도 범례 컴포넌트
const AccuracyLegend = () => {
  const legends = [
    { color: "bg-gray-300", label: "0-25%" },
    { color: "bg-blue-300", label: "26-50%" },
    { color: "bg-blue-500", label: "51-75%" },
    { color: "bg-blue-700", label: "76-100%" },
  ];

  return (
    <>
      {legends.map((legend, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${legend.color}`} />
          <span className="text-sm">{legend.label}</span>
        </div>
      ))}
    </>
  );
};

// 원본 기사 섹션 컴포넌트
const OriginalArticle = ({ article }) => {
  const { title, image, description, extraDetails, link } = article;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          alt={title}
          className="rounded-lg object-cover"
          height={300}
          src={image}
          width={600}
        />
        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <h3 className="font-medium">{extraDetails}</h3>
          <Link to={link} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
