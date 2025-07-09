import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";

import { mockProjects } from "../data/mockProjects";

export default function ViewProjects() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        View Student Projects
      </Typography>

      {mockProjects.map((project) => (
        <Card key={project.id} sx={{ mb: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Posted by: {project.postedBy}
            </Typography>
            <Typography sx={{ mb: 1 }}>{project.description}</Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {project.skillsNeeded.map((skill, idx) => (
                <Chip key={idx} label={skill} />
              ))}
            </Box>

            {project.lookingForCollaborators ? (
              <button className="bg-purple-800 text-white px-2 py-2 rounded">I'm Interested</button>
            ) : (
              <Chip label="Not looking for collaborators" color="default" />
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
