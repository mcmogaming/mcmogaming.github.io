import * as React from "react"
import { Grid, Stack, Typography, Chip, Button } from "@mui/material"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import Portrait from "../images/profile.jpg"
import SwapRobotImg from "../images/swap_robot.jpeg"
import SwapLogoImg from "../images/swap_logo.png"
import KHERGLogoImg from "../images/kherg_logo.png"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import MyRobotGif from "../gif/robot.gif"
import CanvassaGif from "../gif/canvassa.gif"

export const ProjectsPage = () => {
  const ProjectInfo = () => (
    <Grid xs={6} md={4} sx={{ p: 1 }}>
      <Card>
        <CardContent>
          <Typography
            align="center"
            variant="h4"
            sx={{ fontWeight: "bold", fontFamily: "Verdana, sans-serif" }}
          >
            Canvassa
          </Typography>
          <Box component="img" src={MyRobotGif} sx={{ width: "100%" }} />
          <Typography
            align="left"
            variant="h6"
            sx={{ width: "100%", fontFamily: "Verdana, sans-serif" }}
          >
            <b>Description:</b> RobOS is an open source robotics operating
            system.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              align="left"
              variant="p"
              sx={{ fontFamily: "Verdana, sans-serif" }}
            >
              <b>Tech:</b>
            </Typography>
            <Box sx={{ ml: 1 }}>
              <Chip label="C++" sx={{ mx: 1 }} />
              <Chip label="ESP32" sx={{ mx: 1 }} />
              <Chip label="PubSub" sx={{ mx: 1 }} />
              <Chip label="BT" sx={{ mx: 1 }} />
              <Chip label="WebSocket" sx={{ mx: 1 }} />
            </Box>
          </Box>
          <Box>
            <Button>Github</Button>
            <Button>View App</Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )

  return (
    <>
      <Typography
        align="center"
        variant="h2"
        sx={{ fontWeight: "bold", fontFamily: "Verdana, sans-serif" }}
      >
        Projects
      </Typography>
      <Grid container columns={12}>
        <ProjectInfo />
        <ProjectInfo />
        <ProjectInfo />
        <ProjectInfo />
        <ProjectInfo />
        <ProjectInfo />
        <ProjectInfo />
      </Grid>
    </>
  )
}
