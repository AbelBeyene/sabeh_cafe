import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  MenuItem as MuiMenuItem,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { categories, menuItems } from '../../data/menuData';
import type { MenuItem } from '../../types/menu';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [formData, setFormData] = useState<Partial<MenuItem>>({
    name: '',
    amharicName: '',
    description: '',
    price: 0,
    // category: categories[0]?.id || '',
    image: '',
    isAvailable: true,
  });

  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      console.log('Updating item:', { id: editingId, ...formData });
    } else {
      console.log('Adding new item:', formData);
    }
    setFormData({
      name: '',
      amharicName: '',
      description: '',
      price: 0,
    //   category: categories[0]?.id || '',
      image: '',
      isAvailable: true,
    });
    setEditingId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev: Partial<MenuItem>) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleEdit = (item: MenuItem) => {
    setFormData(item);
    setEditingId(item.id);
  };

  const handleDelete = (id: string) => {
    console.log('Deleting item:', id);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {editingId ? 'Edit Menu Item' : 'Add New Menu Item'}
        </Typography>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Name (English)"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Name (Amharic)"
                  name="amharicName"
                  value={formData.amharicName}
                  onChange={handleChange}
                />
              </Box>

              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={3}
                required
              />

              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: <Typography>Birr</Typography>,
                  }}
                />
                <TextField
                  fullWidth
                  select
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {categories.map((category) => (
                    <MuiMenuItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </MuiMenuItem>
                  ))}
                </TextField>
              </Box>

              <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />

              <Button type="submit" variant="contained" color="primary" size="large">
                {editingId ? 'Update Item' : 'Add Item'}
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Typography variant="h4" gutterBottom>
          Manage Menu Items
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Amharic Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.amharicName}</TableCell>
                  <TableCell>
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </TableCell>
                  <TableCell>{item.price} Birr</TableCell>
                  <TableCell>{item.isAvailable ? 'Available' : 'Not Available'}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(item)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard; 