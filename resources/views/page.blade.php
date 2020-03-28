@extends('layouts.app')

@section('content')
  @while(have_posts())
    @php the_post() @endphp
    <section class="section section--content">
      <div class="container">
        <h1 class="section--title--smaller | right-based">{!! get_the_title() !!}</h1>

        <article data-aos="fade-up">
          {!! get_the_content() !!}
        </article>
      </div>
    </section>
  @endwhile
@endsection
