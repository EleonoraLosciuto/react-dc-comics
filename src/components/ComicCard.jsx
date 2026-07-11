import './ComicCard.css'

const ComicCard = (props) => {
    return (
        <div className="comic-card">
            <img src={props.info.thumb} alt={props.info.series} />
            <p>{props.info.series}</p>
        </div>
    );
}

export default ComicCard

