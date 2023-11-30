import React from "react";
import {SoundPlayer} from "../components/player/soundPlayer.js";
import {sounds} from './player/sounds.js'
import Typography from "@mui/material/Typography";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {useFavorites} from "../hooks/useFavorites";
import '../shared/screen.css';

export const Favorites = () => {
    const {favorites, handleChangeFavorite} = useFavorites();

    return (
        <div className="container">
            <Typography variant="h4" component="h4" gutterBottom>
                Favorites
            </Typography>

            <TableContainer sx={{
                '& .MuiTableCell-root': {
                    borderBottom: 'none',
                },
            }}>
                <Table size={"small"}>
                    <TableBody>
                        {sounds.filter(e => favorites.includes(e.id)).map(sound => (
                            <TableRow key={sound.id}>
                                <TableCell>
                                    <Typography variant="h6" component="h6" noWrap>
                                        {sound.name}
                                    </Typography>
                                </TableCell>

                                <SoundPlayer sound={sound} isFavorite={favorites.includes(sound.id)}
                                             setFavorite={handleChangeFavorite(sound.id)}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}