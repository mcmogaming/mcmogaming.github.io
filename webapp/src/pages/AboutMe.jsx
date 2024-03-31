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

export const HomepageCarosel = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            component="img"
            sx={{ maxWidth: "100%", maxHeight: "100%" }}
            alt="My Picture"
            src={Portrait}
          ></Box>
        </Grid>
        <Grid xs={12} md={4}>
          <Box>
            <Grid container>
              <Grid xs={12} sx={{ m: 2 }} columnSpacing={1}>
                {" "}
                <Typography variant="h5" sx={{ fontFamily: "Monospace" }}>
                  Hey I'm Mohammad Rahman a 5th year Computer Science student
                  specializing in Software Engineering.
                </Typography>
              </Grid>
              <Grid xs={12} sx={{ mt: 2 }}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Arial Black, sans-serif",
                  }}
                >
                  Experiences
                </Typography>
              </Grid>
              <Grid xs={12} sx={{ mt: 2, mx: 2 }}>
                <Grid container>
                  <Grid xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mx: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        align="left"
                        sx={{
                          fontWeight: "bold",
                          fontFamily: "Verdana, sans-serif",
                        }}
                      >
                        Web Developer Coop
                      </Typography>
                      <Chip label="8 months"></Chip>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        mx: 2,
                      }}
                    >
                      <Chip label="ReactJs" />
                      <Chip label="Docker" />
                      <Chip label="Material UI" />
                      <Chip label="MobX" />
                      <Chip label="AWS" />
                      <Chip label="TimeScaleDB" />
                      <Chip label="MQTT" />
                      <Chip label="ROS2" />
                      <Chip label="..." onClick={() => {}} />
                    </Box>
                  </Grid>
                  <Grid xs={3}>
                    <Box
                      component="img"
                      src={SwapLogoImg}
                      sx={{ maxWidth: "100%" }}
                    ></Box>
                  </Grid>
                  <Grid xs={9}>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Typography
                        variant="h5"
                        align="left"
                        sx={{ fontFamily: "Verdana, sans-serif" }}
                      >
                        Help deliver new features on robot web portal and robot
                        firmware while achieving scalability using latest
                        technologies in cloud, microservices, and robotics.
                      </Typography>
                      <Button>Learn More</Button>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mx: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        align="left"
                        sx={{
                          fontWeight: "bold",
                          fontFamily: "Verdana, sans-serif",
                        }}
                      >
                        Software Engineer Coop
                      </Typography>
                      <Chip label="4 months"></Chip>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        mx: 2,
                      }}
                    >
                      <Chip label="Python" />
                      <Chip label="PHP" />
                      <Chip label="JS" />
                      <Chip label="MySQL" />
                      <Chip label="MS Graph API" />
                    </Box>
                  </Grid>
                  <Grid xs={3}>
                    <Box
                      component="img"
                      src={KHERGLogoImg}
                      sx={{ maxWidth: "100%", mt: 3 }}
                    ></Box>
                  </Grid>
                  <Grid xs={9}>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Typography
                        variant="h5"
                        align="left"
                        sx={{ fontFamily: "Verdana, sans-serif" }}
                      >
                        Developed and maintained python software stack to ensure
                        the integrity of and for the smooth processing of
                        patient data under an agile scrum environment.
                      </Typography>
                      <Button>Learn More</Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                fontFamily: "Arial Black, sans-serif",
              }}
            >
              Projects
            </Typography>
            <Card>
              <Typography
                variant="h5"
                align="left"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Arial Black, sans-serif",
                }}
              >
                RobOs
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
