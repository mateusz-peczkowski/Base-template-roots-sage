<!doctype html>
<html {!! get_language_attributes() !!}>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  @php wp_head() @endphp

  @include('partials.tracking', ['trackingPosition' => 'head-end'])
</head>
<body @php body_class() @endphp>
@include('partials.tracking', ['trackingPosition' => 'body-start'])

@php do_action('get_header') @endphp
@include('partials.header')

<div class="all-overlay">

  <main class="main-wrapper">
    @yield('content')
  </main>

  @php do_action('get_footer') @endphp
  @include('partials.footer')

  @php wp_footer() @endphp

</div>

@include('partials.tracking', ['trackingPosition' => 'body-end'])
</body>
</html>
