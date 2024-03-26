import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Snackbar } from '@mui/material';

const NutritionTracking = () => {
  const [foodData, setFoodData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [caloriesGained, setCaloriesGained] = useState(0);
  const [caloriesReduced, setCaloriesReduced] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState(0);
  const [dailyCaloriesGoal, setDailyCaloriesGoal] = useState(0);
  const [weeklyWeights, setWeeklyWeights] = useState([]);
  const [fetchingData, setFetchingData] = useState(false); // State to control data fetching
  const apiKey = '0fa3f58ee10dbd236b3ba8b16c83f7c8';

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/food/products/search?query=${searchQuery}&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFoodData(data);
        if (data && data.products && data.products.length > 0) {
          const calories = data.products[0].nutrition ? data.products[0].nutrition.calories : 0;
          if (calories > dailyCaloriesGoal) {
            setCaloriesGained(caloriesGained + calories - dailyCaloriesGoal);
          } else {
            setCaloriesReduced(caloriesReduced + dailyCaloriesGoal - calories);
          }
        }
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    if (fetchingData) {
      fetchFoodData();
    }

    // Clean-up function to stop fetching when component unmounts
    return () => {
      setFetchingData(false);
    };
  }, [fetchingData, searchQuery, apiKey, dailyCaloriesGoal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchingData(true);
  };

  const handleSaveGoals = (newGoals) => {
    setDailyCaloriesGoal(parseInt(newGoals.dailyCalories));
    setTargetWeight(parseInt(newGoals.targetWeight));
  };

  const handleWeightChange = (e) => {
    setCurrentWeight(parseInt(e.target.value));
  };

  const handleWeeklyWeightSubmit = (e) => {
    e.preventDefault();
    setWeeklyWeights([...weeklyWeights, currentWeight]);
    setCurrentWeight(0); // Reset current weight after submission
  };

  const handleFoodEatenSubmit = (food) => {
    setSearchQuery(food);
  };

  const handleSnackbarClose = () => {
    // close Snackbar logic here
  };

  return (
    <Container>
      <Typography variant="h1">Fitness Tracking App</Typography>
      <div>
        <Typography variant="h2">Nutrition Tracker</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter food eaten"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="contained">Submit</Button>
        </form>
        {foodData && foodData.products ? (
          <div>
            <Typography variant="h3">Search Results</Typography>
            <ul>
              {foodData.products.map((product) => {
                const calories = product.nutrition ? product.nutrition.calories : 0;
                return (
                  <li key={product.id}>
                    <Typography variant="body1">
                      <strong>{product.title}</strong>: {calories} calories
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <Typography variant="body1">No data found.</Typography>
        )}
      </div>
      <div>
        <Typography variant="h2">Goal Setting</Typography>
        <GoalSetting onSave={handleSaveGoals} />
      </div>
      {dailyCaloriesGoal > 0 && (
        <div>
          <Typography variant="h2">Calories Tracking</Typography>
          <Typography variant="body1">Calories Gained: {caloriesGained}</Typography>
          <Typography variant="body1">Calories Reduced: {caloriesReduced}</Typography>
        </div>
      )}
      {targetWeight > 0 && (
        <div>
          <Typography variant="h2">Weight Tracking</Typography>
          <form onSubmit={handleWeeklyWeightSubmit}>
            <label htmlFor="currentWeight">Current Weight (in kg):</label>
            <TextField
              type="number"
              id="currentWeight"
              value={currentWeight}
              onChange={handleWeightChange}
              variant="outlined"
            />
            <Button type="submit" variant="contained">Submit Weekly Weight</Button>
          </form>
          <Typography variant="body1">Target Weight: {targetWeight} kg</Typography>
          <Typography variant="body1">Weight Difference: {targetWeight - currentWeight} kg</Typography>
          <Typography variant="body1">
            Weekly Weight Trend
          </Typography>
          <ul>
            {weeklyWeights.map((weight, index) => (
              <li key={index}>
                Week {index + 1}: {weight} kg
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <Typography variant="h2">Food Eaten Submission</Typography>
        <FoodEatenForm onSubmit={handleFoodEatenSubmit} />
      </div>
    </Container>
  );
};

const GoalSetting = ({ onSave }) => {
  const [targetWeight, setTargetWeight] = useState('');
  const [dailyCalories, setDailyCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ targetWeight, dailyCalories });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="targetWeight">Target Weight (in kg):</label>
          <TextField
            type="number"
            id="targetWeight"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <label htmlFor="dailyCalories">Daily Calories Goal:</label>
          <TextField
            type="number"
            id="dailyCalories"
            value={dailyCalories}
            onChange={(e) => setDailyCalories(e.target.value)}
            variant="outlined"
          />
        </div>
        <Button type="submit" variant="contained">Save Goals</Button>
      </form>
    </div>
  );
};

const FoodEatenForm = ({ onSubmit }) => {
  const [food, setFood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(food);
    setFood('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Enter food eaten"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        variant="outlined"
      />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};

export default NutritionTracking;

