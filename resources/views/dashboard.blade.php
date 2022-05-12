@extends('layouts.main')
@section('content')
<main>
    <div class="title">
        <h2 class="title-heading">Hi, Napoleon !</h2>
        <p class="text-body">Let's overview your product with our dashboard</p>
    </div>
    <div class="content chart">
        <canvas id="myChart"></canvas>
        <div class="report">
            <h2>19 DAYS</h2>
            <p class="text-body">Report this month</p>
        </div>
    </div>
</main>
@endsection
