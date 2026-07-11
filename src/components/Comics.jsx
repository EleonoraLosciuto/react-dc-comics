import './Comics.css';
import comics from '../../comics.js';
import ComicCard from './ComicCard.jsx';

const Comics = () => {
    return (
        <section className='comics-cards-section'>
            <h3>Current Series</h3>
            <div className="comics-cards">
                {comics.map(comic => (
                    <ComicCard key={comic.id} info={comic} />
                ))
                }
            </div>
            <button id='loadMoreComics'>Load More</button>
        </section>

    )
}

export default Comics;