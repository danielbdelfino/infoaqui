import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { FacebookIcon, FacebookShareButton } from 'react-share';
import { StringParam, useQueryParam } from "use-query-params";
import api from '../components/api/crawlerapi';
import MainContainer from '../components/MainContainerv2';
import News3CardDemo from '../components/News3CardDemo';
import SEO from '../components/seo';
import { useLocation } from "@reach/router"

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#42a8ec',
  },
  share: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#42a8ec',
  },
}));

export default function P() {
  const { href } = useLocation();
  const styles = useStyles();
  const [contents, setContents] = useState([{ link: '', link_image: '', title: '' }]);
  const [pageDetails, setPageDetail] = useState({
    title: '',
    link: '',
    link_image: '',
    self_path: '',
    type: '',
    article: ''
  });

  //const search = window.location.search;
  //const props = useParams();
  //const params = new URLSearchParams(props.location.search);
  //console.log(params);
  const page = useQueryParam("page", StringParam)[0];
  const id = useQueryParam("id", StringParam)[0];
  // console.log("page: " + page);
  // console.log("id: " + id);
  // console.log(props.location.pathname);

  const updateContents = (detail) => {
    // console.log(detail);
    api.getType(detail.type, undefined, (results) => setContents(results));
  };

  useEffect(() => {
    api.getPageDetail(id, page, (results) => {
      setPageDetail(results);
      updateContents(results);
      // api.getType(pageDetails.type, (results) => setContents(results));
    });
  }, []);

  return (
    <MainContainer>
      {(pageDetails.title != '') &&
        <SEO
          title={pageDetails.title}
          description={pageDetails.title}
          image={pageDetails.link_image}
          article
        />
      }
      {/* <Grid container spacing={3}>
        <iframe src="https://meups.com.br/noticias/demo-de-stranger-of-paradise-final-fantasy-origin-ja-disponivel-na-ps-store/" width="100%" height="100%" title="MEUPS"></iframe>
      </Grid> */}
      <div style={{ paddingTop: '10px' }}>
        <Grid>
          {/* <MediaCard width="100%" props={ pageDetails }></MediaCard> */}
          <News3CardDemo props={pageDetails} details={true} ></News3CardDemo>
          {(pageDetails.title != '') &&
            <div style={{ paddingTop: '25px' }}>
              <Typography variant={'h2'} className={styles.share}>
                Compartilhe
              </Typography>
              <FacebookShareButton
                url={href}
                quote={pageDetails.title}
              >
                <FacebookIcon
                  size={48}
                  round />
              </FacebookShareButton>
            </div>
          }
        </Grid>
      </div>
       
      <div style={{ paddingTop: '30px' }}>
        <Typography variant={'h2'} className={styles.title}>
          Outras notícias recentes
        </Typography>
        <Grid container spacing={4}>
          {/* <Grid container spacing={3}>*/} 
          {
            (contents != null && contents.length > 0) &&
            contents.slice(0, 6).map(element =>
              <Grid content item xs={12} sm={4}>
                {/* <Grid content item xs={12} sm={3}> */}
                {/* <CardOverText props={element}></CardOverText> */}
                <News3CardDemo props={element}></News3CardDemo>
                {/* <MediaCard props={element}></MediaCard> */}
              </Grid>
            )
          }
        </Grid>
      </div>
      
    </MainContainer>
  );
}
