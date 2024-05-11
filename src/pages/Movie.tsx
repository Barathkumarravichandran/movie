import React, { useState, useEffect } from 'react';
import { Breadcrumb, Row, Col, Button, Skeleton } from 'antd';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface MovieType {
  '#IMDB_ID': string;
  '#TITLE': string;
  '#IMG_POSTER': string;
  '#RANK': number;
  '#AKA': string;
  '#ACTORS': string;
  '#YEAR': number;
  '#IMDB_URL': string;
}

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://search.imdbot.workers.dev/?q=${id}`);
        setSelectedMovie(response.data.description.find((movie: MovieType) => movie['#IMDB_ID'] === id) || null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleViewIMDB = () => {
    if (selectedMovie) {
      window.open(selectedMovie['#IMDB_URL'], '_blank');
    }
  };

  if (loading) {
    return (
      <div className='appBody'>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Movies</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Skeleton.Input style={{ width: 200 }} active />
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={9}>
            <Skeleton.Image style={{ width: '100%', borderRadius: '8px' }} />
          </Col>
          <Col span={15} style={{ paddingLeft: "2rem" }}>
            <Skeleton active />
          </Col>
        </Row>
      </div>
    );
  }

  if (!selectedMovie) {
    return <div>Error: Movie not found</div>;
  }

  return (
    <div className='appBody'>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Movies</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedMovie['#TITLE']}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={9}>
          <img alt={selectedMovie['#TITLE']} src={selectedMovie['#IMG_POSTER']} style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </Col>
        <Col span={15} style={{ paddingLeft: "2rem" }}>
          <h1 style={{ marginTop: '0' }}>{selectedMovie['#TITLE']} (AKA: {selectedMovie['#AKA']})</h1>
          <h4>Released On: {selectedMovie['#YEAR']}</h4>
          <h3>Cast and Crew</h3>
          <p>{selectedMovie['#ACTORS']}</p>
          <h3>Rank: {selectedMovie['#RANK']}</h3>
          <h3>Movie Plot</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Nunc vel risus commodo viverra maecenas accumsan. Ultrices mi tempus imperdiet nulla malesuada. Suspendisse sed nisi lacus sed viverra tellus. Amet facilisis magna etiam tempor orci. Id ornare arcu odio ut sem. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quis lectus nulla at volutpat diam ut. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Purus viverra accumsan in nisl nisi scelerisque. Leo urna molestie at elementum eu facilisis. Fermentum posuere urna nec tincidunt. Scelerisque eu ultrices vitae auctor eu. Venenatis a condimentum vitae sapien.</p>
          <p>Vestibulum lorem sed risus ultricies. Turpis egestas maecenas pharetra convallis posuere. Porttitor lacus luctus accumsan tortor posuere ac. Donec massa sapien faucibus et molestie ac feugiat sed. Nunc sed augue lacus viverra vitae congue eu consequat ac. Etiam sit amet nisl purus in. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus mattis molestie a iaculis at. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Aliquam eleifend mi in nulla posuere. Duis ultricies lacus sed turpis tincidunt id aliquet risus.</p>
          <Button onClick={handleViewIMDB} style={{ background: 'linear-gradient(45deg, #FFD700, #FF8C00)', color: 'white', border: 'none' }}>View in IMDB</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Movie;
