import { colors } from "@/shared/styles/colors";
import React, { useMemo } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { DataPoint, MyLineChartProps } from "./types";
import { styles } from "./styles";

export function MyLineChart({ data, type, title }: MyLineChartProps) {
    const screenWidth = Dimensions.get("window").width;
    const chartWidth = screenWidth - (16 * 2) - (16 * 2) - 20;

    const config = type === 'temperature' 
        ? { 
            avgColor: colors.primary,
            maxColor: colors.red,
            minColor: colors.cyan,
            unit: '°C',
            maxValue: 40
          }
        : { 
            avgColor: colors.blue_200,
            maxColor: colors.blue_700,
            minColor: colors.blue_100,
            unit: '%',
            maxValue: 100
          };

    const { avgData, maxData, minData } = useMemo(() => {
        if (!data || data.length === 0) {
            return { avgData: [], maxData: [], minData: [] };
        }

        const avg: DataPoint[] = [];
        const max: DataPoint[] = [];
        const min: DataPoint[] = [];

        data.forEach((item) => {
            const label = `${item._id.hour}h`;
            
            const valAvg = type === 'temperature' ? item.averageTemperature : item.averageHumidity;
            const valMax = type === 'temperature' ? item.maxTemperature : item.maxHumidity;
            const valMin = type === 'temperature' ? item.minTemperature : item.minHumidity;

            avg.push({
                value: valAvg,
                label: label, 
                dataPointText: valAvg.toFixed(1),
                textColor: config.avgColor,
                dataPointColor: config.avgColor
            });

            max.push({
                value: valMax,
                dataPointColor: config.maxColor,
                dataPointText: valMax.toFixed(1)
            });

            min.push({
                value: valMin,
                dataPointColor: config.minColor,
                dataPointText: valMin.toFixed(1),
            });
        });

        return { avgData: avg, maxData: max, minData: min };
    }, [data, type]);

    if (avgData.length === 0) {
        return (
            <View style={styles.loadingContentContainer}>
                <Text>Loading data...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>
                    {title} <Text style={styles.unitText}>({config.unit})</Text>
                </Text>
                
                <View style={styles.legendContainer}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: config.maxColor }]} />
                        <Text style={styles.legendText}>Max</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: config.avgColor }]} />
                        <Text style={styles.legendText}>Avg</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: config.minColor }]} />
                        <Text style={styles.legendText}>Min</Text>
                    </View>
                </View>
            </View>

            <LineChart
                width={chartWidth}
                height={220}
                spacing={30}
                initialSpacing={10}
                stepValue={10}
                maxValue={config.maxValue}
                data={avgData}
                data2={maxData}
                data3={minData}
                curved
                isAnimated
                animationDuration={1000}
                color={config.avgColor}
                thickness={3}
                endFillColor="#ffffff"
                startOpacity={0.8}
                endOpacity={0.1}
                color2={config.maxColor}
                thickness2={1}
                strokeDashArray2={[4, 4]}
                color3={config.minColor}
                thickness3={1}
                strokeDashArray3={[4, 4]}
                hideDataPoints={false}
                dataPointsRadius={3}
                dataPointsColor={config.avgColor}
                textColor={config.avgColor}
                textFontSize={10}
                textShiftY={-6}
                textShiftX={-4}
                yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
                xAxisLabelTextStyle={{ color: 'gray', fontSize: 10 }}
                noOfSections={4}
                rulesColor="#F0F0F0"
                rulesType="solid"
                yAxisThickness={0}
                xAxisThickness={1}
                xAxisColor="#E0E0E0"
                scrollToEnd={false} 
            />
        </View>
    );
}