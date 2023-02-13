import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ArticleCard from './ArticleCard'

const Articles = ({ articles }) => {
    return (
        <Grid container spacing={2}>
            {articles.map(article => {
                return (
                    <Grid key={article.id} xs={12} md={4}>
                        <ArticleCard article={article} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Articles

