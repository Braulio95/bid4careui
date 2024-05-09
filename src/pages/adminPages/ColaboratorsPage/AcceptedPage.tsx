import { B4CImage } from "@/components/BigElements/B4CImage";
import { getAcceptedUsers, User } from "@/services/colaboratorsServices";
import { spacings } from "@/style/partials/spacings";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SingleCollaboratorsCard } from "./SingleCollaboratorsCard";

export const AcceptedPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAcceptedUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <Grid container spacing={8}>
      {users.map(({ name, roleId, email }, index) => (
        <Grid item xs={12} tablet={4} desktop={3} key={`${name}-${index}`}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "262px",
              borderRadius: "8px",
              boxShadow: "0px 8px 30px 0px #0000001F",
              paddingBlock: spacings.spacing4,
              gap: ".8vh",
            }}
          >
            <div onClick={handleOpen} style={{ cursor: "pointer" }}>
              <B4CImage
                src="/asdasdasdas"
                alt={`${name}-${roleId}`}
                width={100}
                height={100}
              />
            </div>

            <Typography variant="body-small-bold">{name}</Typography>
            <Typography variant="body-small" sx={{ fontSize: "14px" }}>
              {roleId}
            </Typography>
            <Typography variant="body-small" sx={{ fontSize: "14px" }}>
              {email}
            </Typography>
          </Box>
        </Grid>
      ))}
      <SingleCollaboratorsCard
        userId={1}
        open={openModal}
        onClose={handleOpen}
      />
    </Grid>
  );
};
