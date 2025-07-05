import React, { useState } from "react";
import {
    Box, Paper, Typography, Stack, Alert, Button
} from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import NutriScoreForm from "../components/NutriScoreForm";
import NutriScoreResult from "../components/NutriScoreResult";
import { mockPredictNutriscore } from "../utils/mockPredict";
// import { predictNutriscore } from "../api/api";
import { randomNutriFormValues } from "../utils/randomFormValues";

export default function PredictNutriscore() {
    const [values, setValues] = useState({});
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const handleChange = e => {
        setValues(v => ({
            ...v,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setResult(null);
        setApiError("");
        setLoading(true);
        try {
            // const data = await predictNutriscore(values);
            const data = await mockPredictNutriscore(values);
            setResult(data.nutriscore_grade || data.result);
        } catch (err) {
            setApiError("Erreur lors de la prédiction.");
        }
        setLoading(false);
    };

    const handleRandomFill = () => {
        setValues(randomNutriFormValues());
    };
    const isFormEmpty = Object.values(values).every(v => !v);

    return (
        <Box sx={{ maxWidth: 570, mx: "auto", my: 7, px: 1 }}>
            <Paper elevation={3} sx={{
                borderRadius: 4,
                p: { xs: 2.5, md: 4 },
                textAlign: "center"
            }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <EmojiFoodBeverageIcon sx={{ fontSize: 38, color: "#2e425c" }} />
                </Box>
                <Typography variant="h5" fontWeight={900} color="primary" gutterBottom>
                    Prédire le Nutri-Score
                </Typography>



                <NutriScoreForm
                    values={values}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={loading}
                    disabled={isFormEmpty}
                />
                <Box sx={{ textAlign: "center", my: 2 }}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleRandomFill}
                        sx={{ fontWeight: 700, borderRadius: 2 }}
                    >
                        Remplir automatiquement (valeurs aléatoires)
                    </Button>
                </Box>
                <NutriScoreResult result={result} />
                {apiError && (
                    <Alert severity="error" sx={{ mt: 3 }}>{apiError}</Alert>
                )}
            </Paper>
        </Box>
    );
}
