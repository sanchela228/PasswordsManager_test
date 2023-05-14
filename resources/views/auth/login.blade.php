@extends("layout.main")

@section('title', "Authorization")

@section('content')
    <p>login content</p>
    <?
        $test = \Illuminate\Support\Facades\Auth::user();

        var_dump($test);

        if ($test) echo "Вы уже авторизованы";
        else echo "Вы не авторизованы";
    ?>


    @error('error')
        <p>{{$message}}</p>
    @enderror

    @if (!$test > 0)
        <form method="POST" action="{{ route("login/auth") }}"  >
            @csrf
            <input type="email" name="email" placeholder="email">
            <input type="password" name="password" placeholder="pass">
            <input type="submit" value="submit">
        </form>
    @else
        <form method="POST" action="{{ route("login/logout") }}"  >
            @csrf
            <input type="submit" value="Exit">
        </form>
    @endif
@endsection
