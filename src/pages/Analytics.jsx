import {
    BarChart, Bar, LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const monthlyData = [
    { month: 'Jan', sessions: 12400, bounce: 42, conversions: 3.2 },
    { month: 'Feb', sessions: 14800, bounce: 38, conversions: 3.8 },
    { month: 'Mar', sessions: 13200, bounce: 44, conversions: 3.1 },
    { month: 'Apr', sessions: 18600, bounce: 35, conversions: 4.5 },
    { month: 'May', sessions: 16200, bounce: 37, conversions: 4.1 },
    { month: 'Jun', sessions: 21000, bounce: 31, conversions: 5.2 },
    { month: 'Jul', sessions: 19800, bounce: 33, conversions: 4.9 },
    { month: 'Aug', sessions: 24000, bounce: 29, conversions: 5.8 },
]

const Card = ({ children, className = '' }) => (
    <div className={`bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10 ${className}`}>
        {children}
    </div>
)

const TooltipStyle = {
    contentStyle: { background: '#1f1320', border: '1px solid rgba(244,63,94,0.2)', borderRadius: 10 },
    labelStyle: { color: '#9f5a6e' },
    itemStyle: { color: '#fb7185' },
}

export default function Analytics() {
    return (
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
            <div>
                <h1 className="text-xl font-bold text-[#fff1f2]">Analytics</h1>
                <p className="text-sm text-[#9f5a6e] mt-0.5">Traffic, sessions, and conversion data.</p>
            </div>

            {/* Top stats */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                    { label: 'Total Sessions', value: '140,000', change: '+18%' },
                    { label: 'Avg Bounce Rate', value: '34.9%', change: '-6%' },
                    { label: 'Conversion Rate', value: '4.6%', change: '+12%' },
                    { label: 'Avg Session Time', value: '3m 42s', change: '+8%' },
                ].map(({ label, value, change }) => (
                    <Card key={label}>
                        <p className="text-xs text-[#9f5a6e] font-medium mb-2">{label}</p>
                        <p className="text-2xl font-bold text-[#fff1f2]">{value}</p>
                        <span className="text-xs font-semibold text-[#fb7185] bg-[#f43f5e]/15 px-2 py-0.5 rounded-full mt-1 inline-block">
                            {change}
                        </span>
                    </Card>
                ))}
            </div>

            {/* Sessions bar chart */}
            <Card>
                <h3 className="font-semibold text-[#fff1f2] mb-1">Monthly Sessions</h3>
                <p className="text-xs text-[#9f5a6e] mb-5">Total site visits per month</p>
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={monthlyData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(244,63,94,0.06)" />
                        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b3a4a' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 11, fill: '#6b3a4a' }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}k`} />
                        <Tooltip {...TooltipStyle} />
                        <Bar dataKey="sessions" fill="#f43f5e" radius={[6, 6, 0, 0]} opacity={0.85} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>

            {/* Conversion line chart */}
            <Card>
                <h3 className="font-semibold text-[#fff1f2] mb-1">Conversion Rate</h3>
                <p className="text-xs text-[#9f5a6e] mb-5">Monthly conversion % trend</p>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={monthlyData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(244,63,94,0.06)" />
                        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b3a4a' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 11, fill: '#6b3a4a' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
                        <Tooltip {...TooltipStyle} />
                        <Line type="monotone" dataKey="conversions" stroke="#fb7185" strokeWidth={2} dot={{ fill: '#f43f5e', r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </main>
    )
}