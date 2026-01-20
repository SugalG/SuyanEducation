
import AnimatedSection from "../universityPlacement/AnimatedSection";




export default function SectorCard({ sector, demand, vacancies, salary, requirements, growth, index }) {
  const demandColors = {
    "Extremely High": "bg-red-100 text-red-700",
    "Very High": "bg-orange-100 text-orange-700",
    "High": "bg-yellow-100 text-yellow-700",
    "Moderate-High": "bg-green-100 text-green-700"
  };

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-500">
          {/* Sector Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-gray-900">{sector}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${demandColors[demand] || 'bg-gray-100 text-gray-700'}`}>
              {demand}
            </span>
          </div>

          {/* Key Stats */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <span className="text-red-600 font-bold">👥</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Vacancies</div>
                <div className="font-semibold">{vacancies}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 font-bold">💴</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Monthly Salary</div>
                <div className="font-semibold">{salary}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <span className="text-green-600 font-bold">📈</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Growth Rate</div>
                <div className="font-semibold">{growth}</div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <div className="text-sm text-gray-500 mb-2">Key Requirements</div>
            <div className="space-y-2">
              {requirements.slice(0, 3).map((req, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}