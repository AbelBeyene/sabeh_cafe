import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  CircularProgress,
} from '@mui/material'
import { motion } from 'framer-motion'
import { menuItems, categories } from '../data/menuData'
import type { MenuItem } from '../types/menu'

const MotionCard = motion(Card)

const fetchMenuItems = async (): Promise<MenuItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(menuItems), 500)
  })
}

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { data: items, isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems,
  })

  const filteredItems = items?.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  )

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip
          label="All"
          onClick={() => setSelectedCategory('all')}
          color={selectedCategory === 'all' ? 'primary' : 'default'}
          sx={{ m: 0.5 }}
        />
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={`${category.icon} ${category.name}`}
            onClick={() => setSelectedCategory(category.id)}
            color={selectedCategory === category.id ? 'primary' : 'default'}
            sx={{ m: 0.5 }}
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {filteredItems?.map((item) => (
          <Box key={item.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.33% - 16px)' } }}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                  {item.amharicName && (
                    <Typography component="span" variant="subtitle1" color="text.secondary" sx={{ ml: 1 }}>
                      ({item.amharicName})
                    </Typography>
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {item.price.toFixed(0)} Birr
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!item.isAvailable}
                  >
                    {item.isAvailable ? 'Add to Order' : 'Not Available'}
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Menu 