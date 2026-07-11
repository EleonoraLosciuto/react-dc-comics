import './Comics.css';
import comics from '../../comics.js';

const Comics = () => {
    return (
        <section className='comics-cards-section'>
            <h3>Current Series</h3>
            <div className="comics-cards">
                {comics.map(comic => (
                    <div key={comic.id} className='comic-card'>
                        <img src={comic.thumb} alt={comic.series} />
                        <p>{comic.series}</p>
                    </div>
                ))
                }
            </div>
            <button id='loadMoreComics'>Load More</button>
        </section>

    )
}

export default Comics;