import StatsChart from "../components/StatsChart";

const DashboardPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="my-20 text-3xl font-bold">Friendship Analytics</h1>
            <StatsChart></StatsChart>
        </div>
    );
};

export default DashboardPage;