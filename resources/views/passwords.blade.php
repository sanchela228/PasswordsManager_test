@extends("layout.main")
<?
//    echo "<pre>"; print_r(); echo "</pre>";

?>
@section('content')
    <header>
        <div>
            <p class="group-name"><?= $group->title ?></p>
        </div>
        <div>
            <p class="user-name"><?= Auth::user()->email ?></p>
            <a href="/login/logout">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3333 6.28789V3.73959C12.3333 3.51523 12.1318 3.33334 11.8833 3.33334H3.78331C3.53479 3.33334 3.33331 3.51523 3.33331 3.73959V15.9271C3.33331 16.1514 3.53479 16.3333 3.78331 16.3333H11.8833C12.1318 16.3333 12.3333 16.1514 12.3333 15.9271V13.3788" stroke="#E6E6E6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.09149 10.0833H19.0915M19.0915 10.0833L15.8192 7.08334M19.0915 10.0833L15.8188 13.0833" stroke="#E6E6E6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </header>
    <section id="passwords"></section>
@endsection
