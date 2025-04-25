import { format } from "date-fns"

const HTMLTemplate = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Insights Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <style>
        body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #F2F2F2;
        color: #0B1739;
        }

        .report-container {
        background: white;
        padding: 30px;
        border-radius: 12px;
        width: 800px;
        margin: auto;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
        text-align: center;
        margin-bottom: 20px;
        }

        .header h1 {
        margin: 0;
        font-size: 32px;
        }

        .header p {
        margin-top: 5px;
        color: #6b7280;
        }

        .overview {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        }

        .card {
        flex: 1;
        background: #f3f4f6;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        }

        .card h2 {
        margin: 10px 0;
        font-size: 28px;
        color: #818cf8;
        }

        .card i {
        display: block;
        font-size: 24px;
        margin: 0 auto 10px;
        }

        .summary {
        margin-bottom: 20px;
        }

        .summary p {
        margin: 5px 0;
        font-size: 16px;
        }

        .charts {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        }

        .chart-box {
        flex: 1;
        overflow: hidden;
        background: #f3f4f6;
        padding: 20px;
        border-radius: 8px;
        }

        .footer {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-size: 15px;
        }

        .conclusion, .stat {
        flex: 1;
        padding: 20px;
        background: #f3f4f6;
        margin-right: 10px;
        border-radius: 8px;
        }

        .stat:last-child {
        margin-right: 0;
        }

        .highlight {
        font-size: 36px;
        font-weight: bold;
        color: #4f46e5;
        }
    </style>
    </head>
    <body>
    <div class="report-container" id="report-container">
        <div class="header">
        <h1>INSIGHTS REPORT</h1>
        <p>Mon, 12 Feb 2030</p>
        </div>

        <div class="overview">
        <div class="card">
            <i class="fas fa-calendar-day fa-2x" style="color: #0B1739;"></i>
            <p>Peak Day</p>
            <h2>April 7</h2>
        </div>
        <div class="card">
            <i class="fas fa-shopping-cart fa-2x" style="color: #0B1739;"></i>
            <p>Peak Stall</p>
            <h2>aisle F</h2>
        </div>
        <div class="card">
            <i class="fas fa-chart-line fa-2x" style="color: #0B1739;"></i>
            <p>Total Foot Traffic</p>
            <h2>1,500</h2>
        </div>
        </div>

        <div class="summary">
        <h3>Insights Summary</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="summary">
        <h3>Charts</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="charts">
        <div class="chart-box">
            <canvas id="dailyFootTrafficChart"></canvas>
        </div>
        <div class="chart-box">
            <canvas id="shelfVisitChart"></canvas>
        </div>
        </div>

        <div class="summary">
        <h3>Charts</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="charts">
        <div class="chart-box">
            <canvas id="aisleAChart"></canvas>
        </div>
        <div class="chart-box">
            <canvas id="aisleBChart"></canvas>
        </div>
        <div class="chart-box">
            <canvas id="aisleCChart"></canvas>
        </div>
        </div>

        <div class="charts">
        <div class="chart-box">
            <canvas id="aisleDChart"></canvas>
        </div>
        <div class="chart-box">
            <canvas id="aisleEChart"></canvas>
        </div>
        <div class="chart-box">
            <canvas id="aisleFChart"></canvas>
        </div>
        </div>

        <div class="footer">
        <div class="conclusion">
            <h3>Conclusions about the improvements for the store</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere aliquet odio vitae vulputate. Proin eget leo nunc.</p>
        </div>
        <div class="stat">
            <p class="highlight">28%</p>
            <p>Increased by these days</p>
        </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        const ctx1 = document.getElementById('dailyFootTrafficChart').getContext('2d');
        const ctx2 = document.getElementById('shelfVisitChart').getContext('2d');
        const ctx3 = document.getElementById('aisleAChart').getContext('2d');
        const ctx4 = document.getElementById('aisleBChart').getContext('2d');
        const ctx5 = document.getElementById('aisleCChart').getContext('2d');
        const ctx6 = document.getElementById('aisleDChart').getContext('2d');
        const ctx7 = document.getElementById('aisleEChart').getContext('2d');
        const ctx8 = document.getElementById('aisleFChart').getContext('2d');

        new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Camera 1', 'Camera 2', 'Camera 3', 'Camera 4'],
            datasets: [{
            label: 'Per Camera Foot Traffic',
            data: [90, 150, 120, 100, 80, 60, 110],
            borderColor: '#4f46e5',
            fill: false
            }]
        },
        });

        new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Aisle A', 'Aisle B', 'Aisle C', 'Aisle D', 'Aisle E', 'Aisle F'],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });

        new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['04-11', '04-12', '04-13',],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });

        new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['04-11', '04-12', '04-13',],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });

        new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['04-11', '04-12', '04-13',],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });

        new Chart(ctx6, {
        type: 'bar',
        data: {
            labels: ['04-11', '04-12', '04-13',],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });

        new Chart(ctx7, {
        type: 'bar',
        data: {
            labels: ['04-11', '04-12', '04-13',],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });
        
        new Chart(ctx8, {
        type: 'bar',
        data: {
            labels: ['04-11', '04-12', '04-13',],
            datasets: [{
            label: 'Visits',
            data: [400, 380, 420, 390, 410, 400],
            backgroundColor: '#a78bfa'
            }, {
            label: 'Dwell Time',
            data: [100, 120, 90, 110, 105, 100],
            backgroundColor: '#818cf8'
            }]
        },
        });
    </script>
    </body>
    </html>`
}

export {
    HTMLTemplate
}
