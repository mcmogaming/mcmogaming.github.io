import * as React from "react"
import { useEffect, useState } from "react"
import { Grid, Stack, Typography, Chip, Button } from "@mui/material"
import QRCode from "react-qr-code"
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

import { TextField } from "@mui/material"

export const QrCodePage = () => {
  const [qrcodeValue, setQrCodeValue] = useState("http://mcmogaming.github.io")

  useEffect(() => {}, [qrcodeValue])

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Grid>
          <Typography align="center" variant="h3">
            QR Code Generator
          </Typography>
        </Grid>
        <Grid>
          <TextField
            value={qrcodeValue}
            onChange={(e) => setQrCodeValue(e.target.value)}
          />
        </Grid>
        <Grid>
          <QRCode value={qrcodeValue} />
        </Grid>
      </Box>
    </>
  )
}
