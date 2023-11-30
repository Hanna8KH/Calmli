import React from 'react';
import { TrackRow } from './TrackRow';
import {TableContainer, TableCell, TableRow, TableHead, TableBody, Table} from "@mui/material";

const TrackList = ({ tracks }) => {
    return (
       <TableContainer sx={{maxWidth: '600px', marginInline: 'auto', mt: '18px', borderRadius: '5px'}}>
           <Table size={'small'}>
               <TableHead sx={{backgroundColor: 'lightgrey'}}>
                   <TableRow>
                       <TableCell sx={{color: 'black'}}>Название</TableCell>
                       <TableCell sx={{color: 'black'}} align="right">Действия</TableCell>
                       <TableCell sx={{color: 'black'}} align="right">Громкость</TableCell>
                   </TableRow>
               </TableHead>

               <TableBody>
                   {tracks.map(track => (
                       <TrackRow key={track.id} track={track} />
                   ))}
               </TableBody>
           </Table>
       </TableContainer>
    );
};

export default TrackList